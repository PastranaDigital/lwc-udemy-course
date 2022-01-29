public interface PersonService {
  PersonServiceModel getPersonById(Id personId);

  List<PersonServiceModel> getPeopleByIds(Set<Id> personIds);
}
