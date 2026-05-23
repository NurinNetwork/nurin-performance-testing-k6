# Performance Testing on REST API using Grafana k6

Written by: NURIN SHAZALINA BT. SHAIFULIZAN

---

## Introduction ##

A performance testing is an essential process used to evaluate the speed, stability, and scalability of a web application under different workloads. That helps identify system bottlenecks and ensures that applications can handle expected user traffic efficiently.

In this individual assignment, performance testing was conducted on a public REST API (https://randomuser.me/api/) using Grafana k6 in kali Linux. The goal was to analyze the API behaviour under different conditions such as normal usage, high traffic, and long-duration execution.


## Tool Justification ##

Grafana k6 is the tool i used for performance testing. I chose this tool because, it can be used in kali Linux, easy to use and to understand and have a strong support for API testing. It also allows scripting with JavaScript and provide detailed output metrics such as response time, throughput, and error rate.


## Test Types ##

There are three performance tests that will be executed:

1. Load Test
2. Stress Test
3. Soak Test

Each of these test simulates different user conditions to evaluate system performance.


## Methodology ##

Three separate test scripts were created using k6:

1. Load Test: Simulates normal user load
2. Stress Test: Gradually increases users to identify system limits
3. Soak Test: Runs over a long duration to test stability

All tests targeted the same API endpoint:
https://randomuser.me/api/


## Results ##

1. Load Test Results


- Average Response Time: 389.78 ms  
- Minimum Response Time: 249.73 ms  
- Median Response Time: 276.03 ms  
- Maximum Response Time: 2.96 s  

- 90th Percentile: 676.01 ms  
- 95th Percentile: 907.23 ms  

- Total Requests: 4656  
- Throughput: 38.68 requests/second  
- Error Rate: 0.00%  
- Virtual Users: 20  



2. Stress Test Results


- Average Response Time: 454.22 ms  
- Minimum Response Time: 248.24 ms  
- Median Response Time: 351.28 ms  
- Maximum Response Time: 5.87 s  

- 90th Percentile: 753.73 ms  
- 95th Percentile: 935.25 ms  

- Total Requests: 22,813  
- Throughput: 188.03 requests/second  
- Error Rate: 0.00%  
- Virtual Users: up to 200  



3. Soak Test Results


- Average Response Time: 363.87 ms  
- Minimum Response Time: 248.57 ms  
- Median Response Time: 267.3 ms  
- Maximum Response Time: 10.84 s  

- 90th Percentile: 548.99 ms  
- 95th Percentile: 925.29 ms  

- Total Requests: 16,459  
- Throughput: 54.44 requests/second  
- Error Rate: 0.00%  
- Virtual Users: 20  



## Summary of Results ##

 Test Type   | Avg Response Time | Max Response | Throughput | Error Rate |
|------------|------------------|-------------|------------|------------|
| Load Test  | 389.78 ms        | 2.96 s      | 38.68 req/s| 0%         |
| Stress Test| 454.22 ms        | 5.87 s      | 188.03 req/s| 0%        |
| Soak Test  | 363.87 ms        | 10.84 s     | 54.44 req/s| 0%         |



## Analysis ##

Firstly, Load Test show the API performs efficiently under normal user load, maintaining stable response times and zero error rates. Secondly, during the Stress Test process, the system successfully handled up to 200 virtual users without any failures. However, response times increased significantly, reaching a maximum of 5.87 seconds, this is the sign of performance degradation under high load. Thirdly, the Soak Test reveals that the system is stable over extended operation. I can say that because in the result, there is no such thing as errors and crashes. However, one thing to take note in the observation is the spike in the maximum response time up to 10.84 seconds. This suggest occasional latency issues during prolonged usage.
Overall, the API is reliable and stable but shows increased latency under stress and extended operation.



## Bottlenecks ##

Based on the conducted tests, several performance bottlenecks were identified throughout the testing process.From my observation while running the stress test, I noticed that the response time increased significantly as the number of virtual users approached 200. This indicates that the API backend may experience processing delays when handling a large number of simultaneous requests. Additionally, during the soak test, although there were no errors recorded, the maximum response time reached up to 10.84 seconds. From my perspective, this suggests that while the system remains stable over time, there may be occasional latency spikes, possibly due to server-side resource limitations or network fluctuations. Next,I also noticed that the throughput did not increase proportionally with higher load. This indicates that the system might be hitting a performance ceiling where additional users no longer produce higher request handling efficiency. Overall, the main bottleneck observed is related to increasing response time under high load and occasional delays during prolonged testing.


## Recommendations ##

Based on the test results and my observations, several improvements can be made to enhance system performance. Firstly, implementing caching can help reduce response time for repeated requests. Secondly, optimizing backend processing can improve the system’s ability to handle high user loads more efficiently. 
Secondly, using load balancing can distribute traffic more evenly, especially during stress conditions. Monitoring tools should also be applied to detect performance issues such as latency spikes during long-duration testing.Finally, these improvements can help increase performance, stability, and scalability of the API.

## Additional Test: Resilience Test ##

I conducted an extra test, which is a resilience test to explore how the API behaves under more realistic user interaction patterns. This test was designed to simulate irregular user activity by introducing random delays between requests. Unlike traditional tests that generate continuous traffic, this approach reflects how actual users interact with a system, where requests are not constant and may vary over time.

### Resilience Test Results ##

- Average Response Time: 392.53 ms  
- Minimum Response Time: 267.64 ms  
- Median Response Time: 305.25 ms  
- Maximum Response Time: 5.81 s  

- 90th Percentile: 567.74 ms  
- 95th Percentile: 797.47 ms  

- Total Requests: 2,498  
- Throughput: 20.34 requests/second  
- Error Rate: 0.00%  
- Virtual Users: up to 30  


## Obseravtion ##

From my observation, the system maintained stable performance even with irregular request patterns. This indicates that the API is capable of handling more realistic usage scenarios, although latency spikes were still observed at higher response times. This additional test provided deeper insight into system behavior beyond standard load conditions and helped me better understand how performance testing can reflect real-world usage.

## Conclusion ##

In conclusion, this project successfully evaluated the performance of the Random User API using Grafana k6 through load, stress, and soak testing. From my testing, the API performed well under normal conditions and remained stable with zero error rates across all scenarios. However, response times increased during high load and prolonged testing, indicating areas for improvement. Additionally, an extra resilience test was conducted to simulate more realistic user behavior. This test showed that the API can handle irregular usage patterns while maintaining overall stability. Lastly, the system is reliable but can be further optimized to handle extreme traffic more efficiently. This individual assignment helped me understand how performance testing tools can be used to analyze system behavior and identify potential performance issues in real-world applications.

## Video Demo ##

Click the link to watch: https://youtu.be/km461pePgjo
