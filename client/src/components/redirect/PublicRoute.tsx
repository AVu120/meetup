import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";

interface PublicRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PublicRoute: React.FC<PublicRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps: RouteComponentProps) =>
        isAuthenticated ? (
          <Redirect to="/" />
        ) : (
          // @ts-ignore
          <Component {...routeProps} />
        )
      }
    />
  );
};
export default PublicRoute;
