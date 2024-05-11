import React from 'react';
import { FormControl, InputLabel, Select, MenuItem, TextField, Box } from "@material-ui/core";

const styles = {
  formControl: {
    flexGrow: 1,
    margin: '0.625rem', 
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '0.125rem', 
    width: '100%',
  },

  smallFormControl: {
    width: '7.5rem', 
  },
  mediumFormControl: {
    width: '12.5rem', 
  },
  largeFormControl: {
    width: '18.75rem', 
  },
};

const FilterComponent = ({ roles, onFilterChange, onSearchChange, experienceOptions, remoteOptions, minSalaryOptions }) => {
  return (
    <Box style={styles.boxContainer}>
      <FormControl variant="outlined" style={{ ...styles.formControl, ...styles.smallFormControl }}>
        <InputLabel>Roles</InputLabel>
        <Select
          label="Roles"
          onChange={(e) => onFilterChange('role', e.target.value)}
        >
          {roles.map((role) => (
            <MenuItem key={role} value={role}>{role}</MenuItem>
          ))}
        </Select>
      </FormControl>
      
      <FormControl variant="outlined" style={{ ...styles.formControl, ...styles.mediumFormControl }}>
        <InputLabel>Experience</InputLabel>
        <Select
          label="Experience"
          onChange={(e) => onFilterChange('experience', e.target.value)}
        >
          {experienceOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" style={{ ...styles.formControl, ...styles.smallFormControl }}>
        <InputLabel>Remote</InputLabel>
        <Select
          label="Remote"
          onChange={(e) => onFilterChange('remote', e.target.value)}
        >
          {remoteOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl variant="outlined" style={{ ...styles.formControl, ...styles.largeFormControl }}>
        <InputLabel>Minimum Salary</InputLabel>
        <Select
          label="Minimum Salary"
          onChange={(e) => onFilterChange('minSalary', e.target.value)}
        >
          {minSalaryOptions.map((option) => (
            <MenuItem key={option} value={option}>{option}</MenuItem>
          ))}
        </Select>
      </FormControl>

      <TextField
        variant="outlined"
        label="Search Company Name"
        onChange={(e) => onSearchChange(e.target.value)}
        style={{ ...styles.formControl, ...styles.largeFormControl }}
      />
    </Box>
  );
};

export default FilterComponent;
