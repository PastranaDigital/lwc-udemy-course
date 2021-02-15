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
public inherited sharing class AccountTriggerHandler {
    public static void updatePostalCode(List<Account> incomingAccountList) {
        List<Account> updatedAccountList = new List<Account>();
        for(Account acc : incomingAccountList){
            if(!String.isBlank(acc.BillingPostalCode) && acc.Match_Billing_Address__c) {
                acc.ShippingPostalCode = acc.BillingPostalCode;
                updatedAccountList.add(acc);
                System.debug('Update');
            }
        }
        if (updatedAccountList != null && updatedAccountList.size()>0) {
            insert updatedAccountList;
        }
        //try {
        //    insert updatedAccountList;
        //}
        //catch (Exception ex) {
        //    System.debug('The following exception has occurred: ' + ex.getMessage());
        //}
    }

    public static void methodTwo(List<Account> incomingAccountList) {
        System.debug('before update');
    }

    public static void methodThree(List<Account> incomingAccountList) {
        System.debug('after insert');
    }

    public static void methodFour(List<Account> incomingAccountList) {
        System.debug('after delete');
    }
}
