import { Grid } from "@mui/material";

import AppliedFilters from "@/components/AppliedFilters";
import ListEmptyWarning from "@/components/ListEmptyWarning";
import ListFilter from "@/components/ListFilter/ListFilter";
import ListPagination from "@/components/ListPagination";
import PaginationInfo from "@/components/PaginationInfo";
import ApplicationsListItem from "@/features/applications/components/List/ListItem";
import { useFilter, usePagination, useSearch } from "@/hooks";

import { useApplicationsList } from "../../hooks";
import ListFilterButton from "./ListFilterButton";

function ApplicationsList() {
  const { appliedFilters, removeAppliedFilter } = useFilter();
  const { search, setSearch } = useSearch();
  const { page, setPage } = usePagination();
  const { data, isFetched } = useApplicationsList({
    search,
    page,
    categories: appliedFilters.map((filter) => filter.id),
  });

  return (
    <Grid rowSpacing={3} container>
      <Grid container item>
        <PaginationInfo count={data?.count || 0} page={page} />
      </Grid>
      <Grid direction="column" container item>
        <ListFilter
          ListFilterButton={ListFilterButton}
          placeholder="Search apps"
          value={search}
          onChange={setSearch}
        />
        <AppliedFilters appliedFilters={appliedFilters} removeAppliedFilter={removeAppliedFilter} />
      </Grid>
      {isFetched && data?.count === 0 ? (
        <ListEmptyWarning />
      ) : (
        <>
          <Grid alignItems="stretch" columnSpacing={2.5} rowSpacing={5} container item>
            {data?.data.map((application) => (
              <Grid key={application.id} md={4} sm={6} container item>
                <ApplicationsListItem application={application} />
              </Grid>
            ))}
          </Grid>

          <Grid container item>
            <ListPagination count={data?.count || 0} page={page} onPageChange={setPage} />
          </Grid>
        </>
      )}
    </Grid>
  );
}

export default ApplicationsList;
