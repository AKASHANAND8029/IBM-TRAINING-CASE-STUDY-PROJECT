package com.example.ibmprojecteurekaserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.server.EnableEurekaServer;

@SpringBootApplication
@EnableEurekaServer
public class IbmProjectEurekaServerApplication {

    public static void main(String[] args) {
        SpringApplication.run(IbmProjectEurekaServerApplication.class, args);
    }

}
