package fr.thomasschaller.todoserveur;

import fr.thomasschaller.todoserveur.model.Account;
import fr.thomasschaller.todoserveur.model.AccountRepository;
import fr.thomasschaller.todoserveur.model.Task;
import fr.thomasschaller.todoserveur.model.TaskRepository;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Slf4j
@Configuration
public class LoadDatabase {


    @Autowired
    PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initDatabase(AccountRepository accountRepo, TaskRepository taskRepo) {
        return args -> {
            Calendar c= Calendar.getInstance();
            List<Task> tasks = new ArrayList<>();
            Account account = new Account();
            account.setLogin("thomas");
            account.setPassword(passwordEncoder.encode("password"));
            accountRepo.save(account);
            Date today = new Date();

            Task task = new Task();
            task.setTitle("realiser une todo list.");
            task.setAccount(account);
            task.setDueDate(today);
            taskRepo.save(task);
            tasks.add(task);

            task = new Task();
            c.add(Calendar.DAY_OF_MONTH,2);
            task.setTitle("sauvegarder des sous taches.");
            task.setAccount(account);
            task.setDueDate(c.getTime());
            taskRepo.save(task);
            tasks.add(task);

            task = new Task();
            task.setTitle("autre tache.");
            task.setAccount(account);
            c = Calendar.getInstance();
            c.add(Calendar.DAY_OF_MONTH,9);
            task.setDueDate(c.getTime());
            taskRepo.save(task);
            tasks.add(task);

            account.setTasks(tasks);

            log.info(account.getLogin()+ ": "+account.getTasks().toString());
            log.info("Preloading " + accountRepo.save(account));

            account = new Account();
            account.setLogin("david");
            account.setPassword(passwordEncoder.encode("thief"));
            accountRepo.save(account);
            task = new Task();
            task.setTitle("se synchoniser.");
            taskRepo.save(task);
            task.setAccount(account);
            tasks = new ArrayList<>();
            tasks.add(task);
            account.setTasks(tasks);
            log.info(account.getLogin()+ ": "+account.getTasks().toString());
            log.info("Preloading " + accountRepo.save(account));
        };
    }
}
