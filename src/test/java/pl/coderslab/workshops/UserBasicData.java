package pl.coderslab.workshops;

public class UserBasicData {
    private String name;
    private String surname;

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public UserBasicData setName(String name) {
        this.name = name;
        return this;
    }

    public UserBasicData setSurname(String surname) {
        this.surname = surname;
        return this;
    }

}

