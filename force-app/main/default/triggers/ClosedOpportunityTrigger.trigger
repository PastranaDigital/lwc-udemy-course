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
trigger ClosedOpportunityTrigger on Opportunity (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            ClosedOpportunityTriggerHandler.createTask(Trigger.New);
        }
        else if (Trigger.isUpdate) {
            ClosedOpportunityTriggerHandler.createTask(Trigger.New);
        }
    } else { // if (Trigger.isAfter)
        if (Trigger.isInsert) {
            
        }
        else if (Trigger.isUpdate) {
            
        }
    }
}