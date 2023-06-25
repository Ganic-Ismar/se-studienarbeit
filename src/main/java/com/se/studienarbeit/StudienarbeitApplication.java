package com.se.studienarbeit;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.event.EventListener;

@SpringBootApplication
public class StudienarbeitApplication {

	public static void main(String[] args) {
		SpringApplication.run(StudienarbeitApplication.class, args);
	}

	@EventListener(ApplicationReadyEvent.class)
	public void doSomethingAfterStartup() {
    	MainController.setAwakeStatus(true);
		System.out.println("Set awake Status to Online");
	}

}
