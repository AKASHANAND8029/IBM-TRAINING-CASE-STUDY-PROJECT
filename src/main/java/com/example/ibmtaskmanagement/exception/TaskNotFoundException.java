package com.example.ibmtaskmanagement.exception;

public class TaskNotFoundException extends RuntimeException{
    private String message;
    public TaskNotFoundException(String message){
        this.message=message;
    }
    @Override
    public String getMessage() {
        return message;
    }
}
