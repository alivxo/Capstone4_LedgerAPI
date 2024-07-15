package org.yearup.models;

import java.math.BigDecimal;
import java.sql.Date;

public class Entry {
    private int entryId;
    private String description;
    private String vendor;
    private BigDecimal amount;
    private Date datetime;


    public Entry(int entryId, String description, Date datetime, String vendor, BigDecimal amount) {
        this.entryId = entryId;
        this.description = description;
        this.vendor = vendor;
        this.amount = amount;
        this.datetime = datetime;
    }

    public int getEntryId() {
        return entryId;
    }

    public void setEntryId(int entryId) {
        this.entryId = entryId;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getVendor() {
        return vendor;
    }

    public void setVendor(String vendor) {
        this.vendor = vendor;
    }

    public BigDecimal getAmount() {
        return amount;
    }

    public void setAmount(BigDecimal amount) {
        this.amount = amount;
    }

    public Date getDatetime() {
        return datetime;
    }

    public void setDatetime(Date datetime) {
        this.datetime = datetime;
    }
}
