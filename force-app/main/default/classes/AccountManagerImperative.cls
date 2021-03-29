/**
 * @description       :
 * @author            : Omar Pastrana
 * @group             :
 * @last modified on  : 03-29-2021
 * @last modified by  : Omar Pastrana
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   03-29-2021   Omar Pastrana   Initial Version
 **/
public with sharing class AccountManagerImperative {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAccounts(Integer numberOfRecords) {
    return [SELECT Id, Name, Phone FROM Account LIMIT :numberOfRecords];
  }
}
