public with sharing class PersonServiceUser implements PersonService {
  public PersonServiceModel getPersonById(Id personId) {
    List<PersonServiceModel> models = getPeopleByIds(new Set<Id>{ personId });
    return (models.isEmpty()) ? null : models[0];
  }

  public List<PersonServiceModel> getPeopleByIds(Set<Id> personIds) {
    List<PersonServiceModel> models = new List<PersonServiceModel>();

    for (
      Person p : PersonMapperFactory.getInstance().getPeopleByIds(personIds)
    ) {
      PersonServiceModel model = new PersonServiceModel();

      model.setPerson(p);

      models.add(model);
    }

    return models;
  }
}
