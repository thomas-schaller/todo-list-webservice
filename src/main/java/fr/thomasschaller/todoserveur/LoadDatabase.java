package fr.thomasschaller.todoserveur;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.util.ArrayList;
import java.util.List;

@Slf4j
@Configuration
public class LoadDatabase {


    @Bean
    CommandLineRunner initDatabase(AccountRepository accountRepo,TaskRepository taskRepo) {
        return args -> {
            List<Task> tasks = new ArrayList<>();

            Task task = new Task();
            task.setTitle("realiser une todo list.");
            task.setPriority(new Long(1));
            taskRepo.save(task);
            tasks.add(task);
            task = new Task();
            task.setTitle("sauvegarder des sous taches.");
            taskRepo.save(task);
            tasks.add(task);

            Account account = new Account();
            account.setLogin("thomas");
            account.setPassword("password");
            accountRepo.save(account);
            tasks.get(0).setAccount(account);
            taskRepo.save(task);
            tasks.get(1).setAccount(account);
            taskRepo.save(task);
            account.setTasks(tasks);
            log.info("Preloading " + accountRepo.save(account));

            account = new Account();
            account.setLogin("david");
            account.setPassword("thief");
            accountRepo.save(account);
            task = new Task();
            task.setTitle("se synchoniser.");
            taskRepo.save(task);
            task.setAccount(account);
            tasks = new ArrayList<>();
            tasks.add(task);
            account.setTasks(tasks);
            log.info("Preloading " + accountRepo.save(account));
        };
    }
}
