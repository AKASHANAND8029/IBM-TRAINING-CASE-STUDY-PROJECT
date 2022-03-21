package com.example.ibmtaskmanagement.exception;

public class EmptyListException extends RuntimeException {

    private String message;

    public EmptyListException(String message) {
        this.message = message;
    }

    @Override
    public String getMessage() {
        return message;
    }
}
