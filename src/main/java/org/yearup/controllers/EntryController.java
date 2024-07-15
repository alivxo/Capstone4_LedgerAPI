package org.yearup.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;
import org.yearup.data.EntryDao;
import org.yearup.models.Entry;

import java.math.BigDecimal;
import java.util.List;

// http://localhost:8080/entries
@RestController
@RequestMapping("entries")
@CrossOrigin
@PreAuthorize("hasAnyRole('ROLE_ADMIN', 'ROLE_USER')")
public class EntryController {
    private final EntryDao entryDao;

    @Autowired
    public EntryController(EntryDao entryDao) {
        this.entryDao = entryDao;
    }

    @GetMapping("")
    @PreAuthorize("permitAll()")
    public List<Entry> search(@RequestParam(name = "vendor", required = false) String vendor,
                              @RequestParam(name = "minAmount", required = false) BigDecimal minAmount,
                              @RequestParam(name = "maxAmount", required = false) BigDecimal maxAmount,
                              @RequestParam(name = "description", required = false) String description,
                              @RequestParam(name = "customReport", required = false) String customReport
                              )
    {
        try
        {
        return entryDao.searchEntries(description, vendor, minAmount, maxAmount, customReport);

        } catch (Exception e) {

            throw  new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Oops... our bad.");
        }
    }



    @GetMapping("{entryId}")
    public ResponseEntity<Entry> getById(@PathVariable int entryId)
    {
        Entry entry = entryDao.getEntryById(entryId);
        if (entry == null) {
            return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(entry, HttpStatus.OK);
        }
    }


    @PostMapping("")
    @ResponseStatus(HttpStatus.CREATED)
    public Entry addEntry(@RequestBody Entry entry)
    {
        try {
            return entryDao.createEntry(entry);
        } catch (Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Add entry didn't work");
        }
    }

    @PutMapping("/{entryId}")
    public void updateEntry(@PathVariable int entryId, @RequestBody Entry entry)
    {
        try {
            entryDao.updateEntry(entryId, entry);
        } catch (Exception ex){
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Update entry didn't work");
        }
    }

    @DeleteMapping("/{entryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteEntry(@PathVariable int entryId)
    {
        try {
            var entry = entryDao.getEntryById(entryId);

            if (entry == null) {
                throw new ResponseStatusException(HttpStatus.NOT_FOUND);
            }
            entryDao.deleteEntry(entryId);
        }
        catch (Exception ex) {
            throw new ResponseStatusException(HttpStatus.INTERNAL_SERVER_ERROR, "Delete entry didn't work!");
        }
    }
}
