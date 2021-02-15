/**
 * @description       : 
 * @author            : Omar Pastrana
 * @group             : 
 * @last modified on  : 02-14-2021
 * @last modified by  : Omar Pastrana
 * Modifications Log 
 * Ver   Date         Author                               Modification
 * 1.0   02-14-2021   ChangeMeIn@UserSettingsUnder.SFDoc   Initial Version
**/
public inherited sharing class ClosedOpportunityTriggerHandler {
    public static void createTask(List<Opportunity> incomingOpportunityList) {
        List<Task> newTaskList = new List<Task>();
        for(Opportunity opp : incomingOpportunityList){
            if(opp.StageName == 'Closed Won') {
                //Create Task
                Task taskRecord = new Task();
                taskRecord.Subject = 'Follow Up Test Task';
                taskRecord.Status = 'Open';
                taskRecord.Priority = 'Normal';
                taskRecord.WhatId = opp.ID;
                taskRecord.OwnerId = opp.OwnerId;
                newTaskList.add(taskRecord);
                System.debug('Task Created');
            }
        }
        if (newTaskList != null && newTaskList.size()>0) {
            insert newTaskList;            
        }
        //try {
        //    insert updatedOpportunityList;
        //}
        //catch (Exception ex) {
        //    System.debug('The following exception has occurred: ' + ex.getMessage());
        //}
    }
}
