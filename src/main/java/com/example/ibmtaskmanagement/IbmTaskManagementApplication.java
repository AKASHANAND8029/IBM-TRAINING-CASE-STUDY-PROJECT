package com.example.ibmtaskmanagement;

import com.example.ibmtaskmanagement.exception.ErrorResponseModel;
import org.modelmapper.ModelMapper;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
@EnableEurekaClient
public class IbmTaskManagementApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(IbmTaskManagementApplication.class, args);
    }

    @Bean
    public ModelMapper modelMapper(){
        return new ModelMapper();
    }
    @Bean
    public ErrorResponseModel errorResponseModel()
    {
        return  new ErrorResponseModel();
    }


    @Override
    public void run(String... args) throws Exception {
        // taskRepository.save(new UserTask(1,"ProjectXYZ","Infrastructure Project",true,"02-03-22","31-03-22","Manager1","Abhinav"));
    }
}
