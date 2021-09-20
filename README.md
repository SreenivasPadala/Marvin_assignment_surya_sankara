# Assignment for angular frontend engineer

Thanks for taking your time to complete our coding assignment.

Please commit and push your solution when you finish.

We hope you will enjoy this assignment and should you have any questions please reach out to us.

## Purpose

Main purpose of this assignment is to test practical skills of designing, coding, testing and building angular java script applications.

## Requirements

* The assignment should be completed in around 4 hours
  *  if you are running out of time, please add comments in README file where you can describe the steps that you were planning to do in order to complete the assignment.
  
* The application should be implemented with angular 10 and bootstrap framework

* The components created should be covered with simple unit tests

* The backend calls should be real http calls using a mock to simulate the real backend operations.
  * Once the backend is ready, it should be just one line to replace the mock.

* Documentation of the implemented functionality and instructions how to build and run are present (README file).

* Do this assignment on your own

* Do not disclose any detail of this assignment

## Assignment

The goal is to implement an application which represents a basic project management flow.

It should store all records in the browser local storage and perform real backend API calls.


* Home page shows the list of projects
  * Each project in the list should have an "Archive" button next to it.
    * On click, a modal should be popped up asking "Are you sure that you want to archive ```project name```?"
      * If the answer is yes, the project should be archived and removed from the project list.
  * In the top right corner there should be a "Create" button.
    * When the user clicks on it, it should display a form on new page/path.
      * Fields:
        * name - String 100 
        * status - One of *IN_PROGRESS* or *FINISHED*
      * Save button
        * On click, the new project should be added to project list and user should be navigated back to project list


## Backend

Those are the details of the backend (to be mocked)

**Project** model where status can be *IN_PROGRESS* or *FINISHED*.


```
Long id;
String name;
StatusEnum status;
LocalDateTime dateCreated;
boolean archived;
```

### Endpoints

The following table describes the endpoints available.


|Endpoint|Description|Request body|Response body|
|--------|-----------|------------|-------------|
|POST /projects|Create new project|```{"name":"test", "status":"IN_PROGRESS"}```|```{"id": "234", "name": "test", "status":"IN_PROGRESS", "dateCreated":"2021-08-03T17:33", "archived":false}```
|GET /projects|Get all projects that are NOT archived| |```[{"id":"234", "name":"test", "status":"IN_PROGRESS", "dateCreated":"2021-03-16T17:33", "archived":false}, {"id":"112", "name":"demo", "status":"FINISHED", "dateCreated":"2021-02-23T11:32", "archived":false}]```|
|PUT /projects/{id}|Archive project| |```{"id":"234", "name":"test", "status":"IN_PROGRESS", "dateCreated":"2021-03-16T17:33", "archived":true}```|


Thanks again for your interest and good luck!
