package org.yearup.data;

import org.yearup.models.Entry;

import java.math.BigDecimal;
import java.util.List;

public interface EntryDao
{
    List<Entry> searchEntries(String description, String vendor, BigDecimal minAmount, BigDecimal maxAmount, String customReport);
    Entry getEntryById(int id);
    Entry createEntry(Entry entry);
    void updateEntry(int id, Entry entry);
    void deleteEntry(int id);
}
