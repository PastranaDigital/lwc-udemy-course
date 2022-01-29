/**
 * @description       :
 * @author            : Omar Pastrana
 * @group             :
 * @last modified on  : 03-29-2021
 * @last modified by  : Omar Pastrana
 * Modifications Log
 * Ver   Date         Author          Modification
 * 1.0   02-16-2021   Omar Pastrana   Initial Version
 **/
public inherited sharing class AccountListLwcController {
  @AuraEnabled(cacheable=true)
  public static List<Account> getAllAccountList() {
    return [SELECT Id, Name, Phone, Website FROM Account ORDER BY Name];
  }
}
