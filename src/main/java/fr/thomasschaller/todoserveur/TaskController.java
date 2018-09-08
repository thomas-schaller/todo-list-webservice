package fr.thomasschaller.todoserveur;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController   // This means that this class is a Controller
@CrossOrigin
@RequestMapping(path="/tasks") // This means URL's start with / (after Application path)
public class TaskController {


        @Autowired // This means to get the bean called TaskRepository
        // Which is auto-generated by Spring, we will use it to handle the data
        private TaskRepository taskRepository;

        @GetMapping(path="/add") // Map ONLY GET Requests
        public Task addTask(@RequestParam String title
                , @RequestParam String details) {
            // @ResponseBody means the returned Task is the response, not a view name
            // @RequestParam means it is a parameter from the GET or POST request

            Task n = new Task();
            n.setTitle(title);
            n.setDescription(details);
            taskRepository.save(n);
            return n;
        }

    @GetMapping(path="/{id}") // Map ONLY GET Requests with id defined
    public Task retrieveTask(@PathVariable Long id) {
        // @ResponseBody means the returned Task is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request
        Optional<Task> n =taskRepository.findById(id);
            return n.orElse(null);

    }

    @PostMapping // Map ONLY POST Requests
    public Task addTask( @RequestBody Task task) {
        // @ResponseBody means the returned Task is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        taskRepository.save(task);
        return task;
    }

    @PutMapping // Map ONLY PUT Requests
    public Task updateTask( @RequestBody Task task) {
        // @ResponseBody means the returned Task is the response, not a view name
        // @RequestParam means it is a parameter from the GET or POST request

        taskRepository.save(task);
        return task;
    }

    @DeleteMapping(path="/{id}") // Map ONLY DELETE Requests with id defined
    public Task deleteTask(@PathVariable Long id)
    {
            taskRepository.deleteById(id);
            Task t = new Task();
            t.setId(id);
            return t;

    }

        @GetMapping
        public Iterable<Task> getAllTasks() {
            // This returns a JSON or XML with the users
            return taskRepository.findAll();
        }

        @GetMapping(path="/parent/{id}")
        public Iterable<Task> getTaskByParentId(@PathVariable Long id)
        {
            Optional<Task> t =taskRepository.findById(id);
            if (t.isPresent()){
                return taskRepository.findByParent(t.get());
            }
                else{
            return null;
        }
        }
}
