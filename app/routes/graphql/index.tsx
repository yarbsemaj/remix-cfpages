
import { gql, useQuery } from "@apollo/client";

const LOCATIONS_QUERY = gql`
  query GetLocations {
    locations {
      id
      name
      description
      photo
    }
  }
`;

export default function Index() {
    const { data } = useQuery(LOCATIONS_QUERY);

    return (
        <div>
            {JSON.stringify(data)}
        </div>
    );
}