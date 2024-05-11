import React, { useState, useEffect } from "react";
import axios from "axios";
import queryString from "query-string";
import InfiniteScroll from "react-infinite-scroller";
import JobCard from "../components/JobCard";
import FilterComponent from "../components/Filters";
import {
    Grid,
  } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const DATA_ENDPOINT = "https://api.weekday.technology/adhoc/getSampleJdJSON";

const useStyles = makeStyles((theme) => ({
  gridContainer: {
    margin: '0 auto', 
    width: 'auto', 
    textAlign: '-webkit-center'
  },
}));

export default function JobListing() {
  const classes = useStyles();
  const [filters, setFilters] = useState({
    role: '',
    // numberOfEmployees: '',
    experience: '',
    remote: '',
    minSalary: '',
    companyName: '',
  });
  const [originalData, setOriginalData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [totalCount, setTotalCount] = useState(0);
  const roles = ['ios', 'android', 'backend', 'frontend'];
    const experienceOptions = [1,2,3,4,5,6,7,8,9,10];
    // const numberOfEmployees = ['1-10', '11-20', '21-50', '51-100', '100+']
    const remoteOptions = ['remote', 'hybrid', 'in office']
    const minSalaryOptions = [0,10,20,40,50]


    useEffect(() => {
      let data = [...originalData]; 
  
      // Apply each filter
      if (filters.role) {
        data = data.filter(item => item.jobRole!= null && item.jobRole === filters.role);
      }

      if (filters.experience) {
        data = data.filter(item => item.minExp && item.maxExp && item.minExp <= filters.experience && item.maxExp >= filters.experience);
      }

      if (filters.location) {
        data = data.filter(item => item.location!= null && item.location === filters.remote);
      }

      if (filters.minSalary) {
        data = data.filter(item => item.minJdSalary && item.minJdSalary >= filters.minSalary);
      }
      if (filters.companyName) {
        data = data.filter(item => item.companyName.toLowerCase().includes(filters.companyName.toLowerCase()));
      }
  
      setFilteredData(data); 
    }, [filters, originalData]); 

  
    async function getData(currentOffset) {
      const url = queryString.stringifyUrl({
        url: DATA_ENDPOINT,
        query: {
          limit: 10,
          offset: currentOffset,
        },
      });
  
      try {
        const res = await axios.post(url);
        console.log(res);
        setOriginalData(prevData => [...prevData, ...res.data.jdList]); 
        setTotalCount(res.data.totalCount);
        setOffset(offset+10)
        if (currentOffset + 10 >= res.data.totalCount) {
          setHasMore(false); 
        }
      } catch (error) {
        console.log(error);
      }
    }

    // Function to handle changes in filter values
    const onFilterChange = (filterName, value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        [filterName]: value,
      }));
    };
  
    // Function to handle changes in the company name search
    const onSearchChange = (value) => {
      setFilters((prevFilters) => ({
        ...prevFilters,
        companyName: value,
      }));
    };

  const loadMore = () => {
    if (!hasMore) return; // Early return if no more data to load

    const newOffset = offset + 10;
    getData(newOffset);
  };

  return (
    <>
    <FilterComponent
        roles={roles}
        onFilterChange={onFilterChange}
        onSearchChange={onSearchChange}
        experienceOptions={experienceOptions}
        remoteOptions={remoteOptions}
        minSalaryOptions={minSalaryOptions}
      />
    <InfiniteScroll
      pageStart={0}
      loadMore={loadMore}
      hasMore={hasMore}
      loader={<div className="loader" key="loader">Loading ...</div>}
    >
      <Grid container className={classes.gridContainer}>
        {filteredData.map(obj => (

          obj.maxJdSalary && obj.minJdSalary && obj.maxJdSalary <100 && obj.minJdSalary <100 ?
          <Grid item xs={12} sm={6} md={4} lg={4} xl={4} key={obj.id} className={classes.gridItem}>
            <Image obj={obj} data={filteredData} />
          </Grid>
          : ''
        ))}
      </Grid>
    </InfiniteScroll>
    </>
  );
}

function Image({ obj }) {
  return (
      <JobCard obj={obj}/>
  );
}
