package com.example.ibmtaskmanagement.service;

import com.example.ibmtaskmanagement.dto.Dto;
import com.example.ibmtaskmanagement.dto.Dto;
import com.example.ibmtaskmanagement.ui.RequestModel;
import com.example.ibmtaskmanagement.ui.ResponseModel;
import com.example.ibmtaskmanagement.ui.UpdateStatusModel;

import java.util.List;

public interface TaskService {
    public Dto createTask(Dto dto);
    public List<Dto> getTask();
    public Dto findTaskByTaskId(Integer uniqueTaskId);
    public void deleteTaskByTaskId(Integer uniqueTaskId);
    public Dto updateTaskByTaskId(RequestModel requestModel, Integer uniqueTaskId);
    public List<ResponseModel> findByAssignedTo(String assignedTo);
    public Dto updateByAssignedTo(UpdateStatusModel updateStatusModel, String assignedTo);
    public List<ResponseModel> findByAssignedBy(String assignedBy);
}
