package Employee.Management.SpringBootBackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import Employee.Management.SpringBootBackend.model.Employee;

public interface EmployeeRepository extends JpaRepository <Employee, Long>{
    
}
