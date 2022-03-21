package com.example.ibmtaskmanagement.repo;

import com.example.ibmtaskmanagement.model.UserTask;
import com.example.ibmtaskmanagement.model.UserTask;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TaskRepository extends CrudRepository<UserTask,Integer> {
    @Query
    public UserTask findByUniqueTaskId(Integer uniqueTaskId);
    @Query
    public List<UserTask> findByAssignedTo(String assignedTo);
    @Query
    public List<UserTask> findByAssignedBy(String assignedBy);

}
