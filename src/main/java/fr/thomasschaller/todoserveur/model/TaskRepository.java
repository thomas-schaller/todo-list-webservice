package fr.thomasschaller.todoserveur.model;

import fr.thomasschaller.todoserveur.model.Account;
import fr.thomasschaller.todoserveur.model.Task;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface TaskRepository extends CrudRepository<Task, Long> {
    public List<Task> findByTitle(String title);
    public List<Task> findByAccount(Account a);
    public List<Task> findByParent(Task t);
}
