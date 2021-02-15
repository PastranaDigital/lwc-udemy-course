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
trigger AccountAddressTrigger on Account (before insert, before update, after insert, after update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert) {
            AccountTriggerHandler.updatePostalCode(Trigger.New);
        }
        else if (Trigger.isUpdate) {
            AccountTriggerHandler.updatePostalCode(Trigger.New);
        }
    } else { // if (Trigger.isAfter)
        if (Trigger.isInsert) {
            
        }
        else if (Trigger.isUpdate) {
            
        }
    }
}