import React from "react";
import "./CourcePage.css";

function CourcePage() {
  return (
    <div id="Array">
      <section className="array-section">
        <h2 className="super_duper_heading">Array</h2>
        <p>
          <b>Introduction</b>: An Array is a linear data structure that collects
          elements of the same data type and stores them in contiguous and
          adjacent memory locations. It’s one of the most popular and simple
          data structures and is often used to implement other data structures.
          Arrays work on an index system starting from 0 to (n-1), where n is
          the size of the array.
        </p>
      </section>

      <section className="array-section"> 
        <h4 className="subheading">There are mainly three types of arrays:</h4>
        <ul>
          <li>One Dimensional Array</li>
          <li>Two Dimensional Array</li>
          <li>Three Dimensional Array</li>
        </ul>
      </section>

      <section className="array-section">
        <h4 className="subheading">Declaration of an Array.</h4>
        <p>
          Arrays are typically defined with square brackets with the size of the
          arrays as its arguments.
        </p>
      </section>

      <section className="array-section">
        <h4 className="subheading">You can initialize it in many ways.</h4>
        <ul>
          <li>
            Method 1: <code>int a[6] = &#123;2,3,5,7,11&#125;;</code>
          </li>
          <li>
            Method 2: <code>int a[] = &#123;2,3,5,7,11&#125;;</code>
          </li>
          <li>
            Method 3:
            <code>
              <br />
              int arr[4]; <br />
              arr[0] = 1; <br />
              arr[1] = 2; <br />
              arr[2] = 3; <br />
              arr[3] = 4;
            </code>
          </li>
        </ul>
      </section>

      <section className="array-section">
        <h4 className="subheading">Operations You Can Perform on an Array.</h4>
        <ul>
          <li>Traversal</li>
          <li>Insertion</li>
          <li>Deletion</li>
          <li>Searching</li>
          <li>Sorting</li>
        </ul>
      </section>
    </div>
  );
}

export default CourcePage;
