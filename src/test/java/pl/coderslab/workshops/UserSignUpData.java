package pl.coderslab.workshops;

public class UserSignUpData {
    private String alias;
    private String name;
    private String surname;
    private String email;
    private String password;
    private String birthday;
    private boolean isReceiveOffers;
    private boolean isNewsletter;

    public String getAlias() {
        return alias;
    }

    public String getName() {
        return name;
    }

    public String getSurname() {
        return surname;
    }

    public String getEmail() {
        return email;
    }

    public String getPassword() {
        return password;
    }

    public String getBirthday() {
        return birthday;
    }

    public boolean isReceiveOffers() {
        return isReceiveOffers;
    }

    public boolean isNewsletter() {
        return isNewsletter;
    }

    public UserSignUpData setAlias(String alias) {
        this.alias = alias;
        return this;
    }

    public UserSignUpData setName(String name) {
        this.name = name;
        return this;
    }

    public UserSignUpData setSurname(String surname) {
        this.surname = surname;
        return this;
    }

    public UserSignUpData setEmail(String email) {
        this.email = email;
        return this;
    }

    public UserSignUpData setPassword(String password) {
        this.password = password;
        return this;
    }

    public UserSignUpData setBirthday(String birthday) {
        this.birthday = birthday;
        return this;
    }

    public UserSignUpData setReceiveOffers(boolean receiveOffers) {
        isReceiveOffers = receiveOffers;
        return this;
    }

    public UserSignUpData setNewsletter(boolean newsletter) {
        isNewsletter = newsletter;
        return this;
    }
}

