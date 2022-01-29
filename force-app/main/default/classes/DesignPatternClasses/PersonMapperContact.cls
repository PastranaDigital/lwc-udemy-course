public with sharing class PersonMapperContact implements PersonMapper {
  public Person getPersonById(Id personId) {
    List<Person> people = getPeopleByIds(new Set<Id>{ personId });

    return (people.isEmpty()) ? null : people[0];
  }

  public List<Person> getPeopleByIds(Set<Id> personIds) {
    List<Person> people = new List<Person>();

    for (Contact c : [
      SELECT Id, FirstName, LastName, AccountId
      FROM Contact
      WHERE Id IN :personIds
    ]) {
      people.add(mapContactToPerson(c));
    }

    return people;
  }

  private Person mapContactToPerson(Contact c) {
    Person p = new Person();

    p.setRecordId(c.Id);
    p.setFirstName(c.FirstName);
    p.setLastName(c.LastName);
    p.setOrganizationId(c.AccountId);

    return p;
  }
}
