package pl.coderslab.workshops;

public class NewAddressData {
    private String alias;
    private String address;
    private String zip;
    private String city;
    private String country;
    private String phoneNumber;

    public String getAlias() {
        return alias;
    }

    public String getAddress() {
        return address;
    }

    public String getZip() {
        return zip;
    }

    public String getCity() {
        return city;
    }

    public String getCountry() {
        return country;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public NewAddressData setAlias(String alias) {
        this.alias = alias;
        return this;
    }

    public NewAddressData setAddress(String address) {
        this.address = address;
        return this;
    }

    public NewAddressData setZip(String zip) {
        this.zip = zip;
        return this;
    }

    public NewAddressData setCity(String city) {
        this.city = city;
        return this;
    }

    public NewAddressData setCountry(String country) {
        this.country = country;
        return this;
    }

    public NewAddressData setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
        return this;
    }
}

