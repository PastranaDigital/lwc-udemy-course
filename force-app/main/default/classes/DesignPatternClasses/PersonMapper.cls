public interface PersonMapper {
  Person getPersonById(Id personId);

  List<Person> getPeopleByIds(Set<Id> personIds);
}
