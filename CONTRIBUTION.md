# Contribution Guidelines

This is a document that explains how to properly contribute to this repository.  

Issues *will not* be made on this repository. Instead, we use Jira and Confluence as our project management tools.  
Only users that have access to Jira project can contribute to this repository.  

## Branching

There are two main branches in this repository. `develop` and `prod`.  
Develop branch will be used to test new features in development environment.  
Production environment will be used for production deployment. 

Users are not able to push the code directly to production branch. Code needs to be pushed to production branch via Pull Request.  
New features must be pushed to the development branch first, for testing and improvements before they're ready to be pushed towards production.  

### How to branch out

When you start writing a new feature, part of a feature, or a bug fix, it is necessary to do it via new branch.

Branch name convention is going to be as follows:

#### Feature:
`feat/JIRA_TICKET_ID`

#### Bug:
`bug/JIRA_TICKET_ID`

**Should there be a need to diviate from these conventions, you need to ask Project Manager for approval!**

## Pull requests

Each pull requests must be done against development branch.  
Pull Requests are going to be reviewed by a project manager.  
Project manager will either merge PR or return it back to the owner should something not be right.  

**Users will not approve and merge PRs unless such action is approved by a Project Manager**

## Nameing Conventions

kebabCase - variables, functions
PascalCase - Types
snake-case - Files and folders
 
**These conventions can be ignored in cases of specific naming conventions required by a specific framework/library.**  
**Should there be a strictly need for a change of these conventions in some cases, ask Project Manager for approval.** 
