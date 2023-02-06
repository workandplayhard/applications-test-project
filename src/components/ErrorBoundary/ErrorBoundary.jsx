import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: "" };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.log("ErrorBoundary", error, errorInfo);
  }

  render() {
    const { children } = this.props;
    return { ...children };
  }
}

export default ErrorBoundary;
