public with sharing class PersonMapperUser implements PersonMapper {
  public Person getPersonById(Id personId) {
    List<Person> people = getPeopleByIds(new Set<Id>{ personId });

    return (people.isEmpty()) ? null : people[0];
  }

  public List<Person> getPeopleByIds(Set<Id> personIds) {
    List<Person> people = new List<Person>();

    for (User u : [
      SELECT Id, FirstName, LastName
      FROM User
      WHERE Id IN :personIds OR (ContactId != NULL AND ContactId IN :personIds)
    ]) {
      people.add(mapUserToPerson(u));
    }

    return people;
  }

  private Person mapUserToPerson(User u) {
    Person p = new Person();

    p.setRecordId(u.Id);
    p.setFirstName(u.FirstName);
    p.setLastName(u.LastName);

    return p;
  }
}
