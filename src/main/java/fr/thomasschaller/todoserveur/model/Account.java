package fr.thomasschaller.todoserveur.model;

import javax.persistence.*;
import java.util.List;

@Entity
public class Account {
    private String login;
    private String password;

    @OneToMany(mappedBy = "account")
    private List<Task> tasks;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<Task> getTasks() {
        return tasks;
    }

    public void setTasks(List<Task> tasks) {
        this.tasks = tasks;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }
}
