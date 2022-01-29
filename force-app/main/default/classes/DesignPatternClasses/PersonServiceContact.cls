public with sharing class PersonServiceContact implements PersonService {
  public PersonServiceModel getPersonById(Id personId) {
    List<PersonServiceModel> models = getPeopleByIds(new Set<Id>{ personId });
    return (models.isEmpty()) ? null : models[0];
  }

  public List<PersonServiceModel> getPeopleByIds(Set<Id> personIds) {
    Set<Id> organizationIds = new Set<Id>();
    List<Person> people = PersonMapperFactory.getInstance()
      .getPeopleByIds(personIds);
    Map<Id, Organization> orgMap = new Map<Id, Organization>();
    List<PersonServiceModel> models = new List<PersonServiceModel>();

    for (Person p : people) {
      if (String.isNotBlank(p.getOrganizationId())) {
        organizationIds.add(p.getOrganizationId());
      }
    }

    for (
      Organization o : OrganizationMapperFactory.getInstance()
        .getOrganizationsByIds(organizationIds)
    ) {
      orgMap.put(o.getRecordId(), o);
    }

    for (Person p : people) {
      PersonServiceModel model = new PersonServiceModel();

      model.setPerson(p);

      if (String.isNotBlank(p.getOrganizationId())) {
        model.setOrganization(orgMap.get(p.getOrganizationId()));
      }

      models.add(model);
    }

    return models;
  }
}
