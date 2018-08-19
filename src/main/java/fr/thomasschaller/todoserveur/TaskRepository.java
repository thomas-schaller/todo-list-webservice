package fr.thomasschaller.todoserveur;

import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {
    public List<Task> findByTitle(String title);
}
