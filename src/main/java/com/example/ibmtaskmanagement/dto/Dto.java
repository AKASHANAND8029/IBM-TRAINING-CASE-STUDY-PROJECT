package com.example.ibmtaskmanagement.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class Dto {

    private Integer uniqueTaskId;
    private String taskName;
    private String taskDescription;
    private boolean completed;
    private String startDate;
    private String endDate;
    private String assignedBy;
    private String assignedTo;
//    private String email;
//    private String password;
}

