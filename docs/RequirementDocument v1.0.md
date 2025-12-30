# Requirements Specification Document for Notes Dashboard System

## 1. Introduction

This document presents the software requirements for the Notes Dashboard System. The system is a simple web based application designed to demonstrate Software Configuration Management practices. It includes a login page, a dashboard page, a basic notes management functionality, and a simple data storage mechanism. The emphasis of this project is on requirements clarity, traceability, and configuration control rather than advanced system functionality.

This requirements document serves as a baseline artifact and a reference for development, change control, configuration audits, and validation activities throughout the project lifecycle.

## 2. Purpose of the System

The purpose of the Notes Dashboard System is to allow a user to authenticate through a login interface and access a dashboard where short text notes can be added and viewed. The system is intended for academic demonstration purposes and does not aim to provide full security, scalability, or production level robustness.

## 3. Scope of the System

The system scope includes the following components:

- A login page for user access
- A dashboard page displayed after successful login
- A notes feature that allows adding and viewing notes
- A simple JSON file for storing notes data

The scope excludes advanced authentication, encryption, database management systems, and multi user support.

## 4. Stakeholders

The primary stakeholders of the system include:

- Project Manager and SCM Lead
- Developers
- Instructor and evaluators
- End users for demonstration purposes

## 5. Functional Requirements

### FR 1. User Login

The system shall provide a login page where a user can enter a username and password.

### FR 2. Login Validation

The system shall validate user input and allow access to the dashboard upon successful login.

### FR 3. Dashboard Access

The system shall redirect the user to a dashboard page after a successful login.

### FR 4. Add Notes

The system shall allow the user to enter a short text note on the dashboard.

### FR 5. Save Notes

The system shall save user notes in a simple JSON file.

### FR 6. View Notes

The system shall display a list of saved notes on the dashboard.

### FR 7. Logout

The system shall allow the user to log out and return to the login page.

## 6. Non Functional Requirements

### NFR 1. Usability

The system shall provide a simple and intuitive user interface suitable for demonstration.

### NFR 2. Maintainability

The system source code and documents shall be modular and easy to update.

### NFR 3. Reliability

The system shall perform basic functions consistently during normal usage.

### NFR 4. Portability

The system shall run on modern web browsers without requiring additional software.

### NFR 5. Configuration Control

All system artifacts shall be version controlled using Git and GitHub.

## 7. Assumptions and Constraints

- The system assumes a single user interacting with the application at a time.
- The system is constrained to simple web technologies such as HTML, CSS, and JavaScript.
- The system is developed for academic purposes only.
- Internet access is required to use GitHub for version control.

## 8. Acceptance Criteria

The system shall be considered acceptable if:

- The login page loads correctly
- The dashboard page is accessible after login
- Notes can be added and displayed
- Notes are stored in a JSON file
- All requirements documents and source files are under version control

## 9. Traceability

Each functional requirement is traceable to corresponding source code files, change requests, baselines, and releases. Traceability is maintained through the Configuration Item Register and GitHub commit history.

### References

- IEEE. IEEE Recommended Practice for Software Requirements Specifications. IEEE Standard 830.
- Sommerville, I. Software Engineering. Pearson Education.
