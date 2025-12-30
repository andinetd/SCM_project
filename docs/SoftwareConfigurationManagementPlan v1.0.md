# Software Configuration Management Plan for Notes Dashboard System

## 1. Introduction

This Software Configuration Management Plan defines the policies, procedures, and responsibilities used to manage configuration items for the mini project Notes Dashboard System. The system consists of a login page, a dashboard page, a simple notes management functionality, and a basic data storage file. The focus of this project is on applying Software Configuration Management practices rather than developing complex software features.

This plan ensures that all project artifacts are properly identified, version controlled, changed in a controlled manner, and auditable throughout the project lifecycle.

## 2. Purpose and Scope

The purpose of this SCM Plan is to establish a structured approach for managing software artifacts using Git and GitHub. It provides guidance on configuration identification, versioning, change control, baselines, and releases.

The scope of this plan includes all project documents, source code files, user interface pages, data files, baselines, and releases produced from project initiation until final submission.

## 3. Project Overview

The Login and Notes Dashboard System allows a user to log in through a simple authentication page and access a dashboard. After login, the user can add short text notes and view saved notes. Notes are stored in a simple JSON file. Security, validation, and database complexity are intentionally minimal to emphasize SCM processes.

## 4. Roles and Responsibilities

- **Project Manager and SCM Lead: Abem Tigist**  
  Responsible for preparing and maintaining the SCM Plan, creating and updating the Configuration Item Register, defining SCM rules, and ensuring compliance with SCM procedures.

- **Repository and Baseline Manager: Andinet Dereje**  
  Responsible for repository creation, folder structure, tagging baselines, and merging approved pull requests.

- **Developer: Abigail Fuad**  
  Responsible for implementing the login page, dashboard page, and notes functionality in feature branches and submitting pull requests.

- **Change Control Coordinator: Abenezer Mulugeta Woldesenbet**  
  Responsible for creating change request forms, submitting and tracking change requests, and maintaining the change log.

- **Release Manager: Abenezer Workneh**  
  Responsible for preparing releases, writing release notes, and publishing releases on GitHub.

- **Auditor: Abenezer Mulugeta Asres**  
  Responsible for conducting physical and functional configuration audits.

## 5. Configuration Item Identification and Naming Conventions

A configuration item is any project artifact that must be controlled and versioned. All configuration items are stored in the GitHub repository.

- **Naming convention for documents:**  
  DocumentName Version

- **Naming convention for source files:**  
  descriptiveFileName.extension

- **Version format:**  
  Major.Minor

- **Example:**  
  SCMPlan v1.0  
  login.html v1.0

## 6. Versioning Rules

Git is used as the primary version control system. The following rules apply:

- All changes must be committed with clear and descriptive commit messages.
- Feature development must occur in feature branches.
- Only reviewed and approved pull requests may be merged into the main branch.
- Version numbers are updated after approved changes.
- Tags are used to identify baselines and releases.

## 7. Branching Model

The project follows a simple branching model.

- **Main branch:** Contains stable and approved versions of the system.
- **Feature branches:**
  - Feature login page branch
  - Feature dashboard branch
  - Feature notes functionality branch

Feature branches are merged into the main branch through pull requests after review.

## 8. Change Control Process

All changes follow a formal change control process:

1. A change request is submitted using a standard form or GitHub issue.
2. The change request is reviewed and approved.
3. Approved changes are implemented in a feature branch.
4. A pull request is created and reviewed.
5. Approved changes are merged into the main branch.
6. The change log is updated.
7. Only approved change requests are included in baselines and releases.

## 9. Baseline Management

A baseline represents a formally approved snapshot of the repository.

- **Baseline 1:** Includes repository setup, SCM Plan, CI Register, requirements description, and initial UI files.
- **Baseline 2:** Includes a working login page, dashboard page, notes functionality, and implemented change requests.

Each baseline is tagged in GitHub and documented using a baseline record.

## 10. Tools Used

- Git for version control
- GitHub for repository hosting, branching, pull requests, issues, baselines, and releases
- Visual Studio Code for development
- HTML, CSS, and JavaScript for implementation
- JSON file for simple data storage
- Markdown and PDF for documentation

## 11. SCM Plan Approval

This SCM Plan is reviewed and approved by the project team before implementation. Any changes to this plan must follow the defined change control process.

### References

- IEEE. IEEE Standard for Configuration Management in Systems and Software Engineering. IEEE Standard 828.
- Pressman, R. Software Engineering A Practitioner's Approach. McGraw Hill.
