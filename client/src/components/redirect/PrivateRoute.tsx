import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";

interface PrivateRouteProps extends RouteProps {
  isAuthenticated: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(routeProps: RouteComponentProps) =>
        isAuthenticated ? (
          // @ts-ignore
          <Component {...routeProps} />
        ) : (
          <Redirect to="/welcome" />
        )
      }
    />
  );
};
export default PrivateRoute;
