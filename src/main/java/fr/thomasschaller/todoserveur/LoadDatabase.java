package fr.thomasschaller.todoserveur;

import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Configuration
public class LoadDatabase {


    @Autowired
    PasswordEncoder passwordEncoder;

    @Bean
    CommandLineRunner initDatabase(AccountRepository accountRepo,TaskRepository taskRepo) {
        return args -> {
            List<Task> tasks = new ArrayList<>();
            Account account = new Account();
            account.setLogin("thomas");
            account.setPassword(passwordEncoder.encode("password"));
            accountRepo.save(account);

            Task task = new Task();
            task.setTitle("realiser une todo list.");
            task.setPriority(new Long(1));
            task.setAccount(account);
            taskRepo.save(task);
            tasks.add(task);

            task = new Task();
            task.setTitle("sauvegarder des sous taches.");
            task.setAccount(account);
            taskRepo.save(task);
            tasks.add(task);

            task = new Task();
            task.setTitle("autre tache.");
            task.setAccount(account);
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
