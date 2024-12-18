//package dev.katussska.backend.config;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.core.io.ClassPathResource;
//import org.springframework.jdbc.datasource.init.ResourceDatabasePopulator;
//
//import javax.annotation.PostConstruct;
//import javax.sql.DataSource;
//
//@Configuration
//public class DatabaseConfig {
//
//    private final DataSource dataSource;
//
//    @Autowired
//    public DatabaseConfig(DataSource dataSource) {
//        this.dataSource = dataSource;
//    }
//
//    @PostConstruct
//    public void loadData() {
//        ResourceDatabasePopulator resourceDatabasePopulator = new ResourceDatabasePopulator(false, false, "UTF-8", new ClassPathResource("database/data.sql"));
//        resourceDatabasePopulator.execute(dataSource);
//    }
//}