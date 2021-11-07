public with sharing class PersonDetailsController {
  @AuraEnabled
  public static ViewModel getViewModel(Id personId) {
    PersonServiceModel pm = PersonServiceFactory.getInstance()
      .getPersonById(personId);

    ViewModel model = new ViewModel();
    Person p = pm.getPerson();
    Organization o = pm.getOrganization();

    model.firstName = p.getFirstName();
    model.lastName = p.getLastName();
    model.organizationId = p.getOrganizationId();

    if (o == null) {
      return model;
    }

    model.organizationName = o.getName();

    return model;
  }

  public class ViewModel {
    @AuraEnabled
    public String firstName;

    @AuraEnabled
    public String lastName;

    @AuraEnabled
    public Id personId;

    @AuraEnabled
    public Id organizationId;

    @AuraEnabled
    public String organizationName;
  }
}
