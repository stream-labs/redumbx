/**
 * Wraps the given object in a Proxy for watching read operations on this object
 *
 * @example
 *
 * const myObject = { foo: 1, bar: 2, qux: 3};
 * const { watcherProxy, getDependentFields } = createDependencyWatcher(myObject);
 * const { foo, bar } = watcherProxy;
 * getDependentFields(); // returns ['foo', 'bar'];
 *
 */
import { BehaviorSubject } from 'rxjs';
import { Dict } from './scope';
//
// export function createDependencyWatcher<T extends object>(watchedObject: T) {
//   const dependencies: Dict<any> = {};
//   const behaviorSubjects: Dict<BehaviorSubject<any>> = {};
//   const watcherProxy = new Proxy(
//     {
//       _proxyName: 'DependencyWatcher',
//       _watchedObject: watchedObject,
//       _dependencies: dependencies,
//       _behaviorSubjects: behaviorSubjects,
//     },
//     {
//       get: (target, propName: string) => {
//         // if (propName === 'isLoaded') debugger;
//         if (propName === 'hasOwnProperty') return watchedObject.hasOwnProperty;
//         if (propName in target) return (target as any)[propName];
//
//         if (`${propName}$` in watchedObject) behaviorSubjects[`${propName}$`] = (watchedObject as any)[`${propName}$`];
//
//         const watchedTarget = watchedObject as any;
//         const value = propName === 'isLoaded' ? watchedTarget.isLoaded : watchedTarget.isLoaded ? watchedTarget[propName] : null;
//
//
//         dependencies[propName] = value;
//
//         return value;
//         // }
//       },
//     },
//   ) as T;
//
//   function getDependentFields() {
//     return Object.keys(dependencies);
//   }
//
//   function getBehaviorSubjects() {
//     return behaviorSubjects;
//   }
//
//   function getDependentValues(): Partial<T> {
//     const values: Partial<T> = {};
//     Object.keys(dependencies).forEach((propName) => {
//       const watchedObjectAny = watchedObject as any;
//
//       if (!watchedObjectAny.isLoaded && propName !== 'isLoaded') {
//         (values as any)[propName] = null;
//         return;
//       }
//
//       const value = dependencies[propName];
//       // if one of the dependencies is a Binding then expose its internal dependencies
//       if (value && value._proxyName === 'Binding') {
//         const bindingMetadata = value._binding;
//         Object.keys(bindingMetadata.dependencies).forEach((bindingPropName) => {
//           (values as any)[`${bindingPropName}__binding-${bindingMetadata.id}`] = dependencies[propName][bindingPropName].value;
//         });
//         return;
//       }
//       // if it's not a Binding then just take the value from the watchedObject
//       (values as any)[propName] = (watchedObject as any)[propName];
//     });
//     return values;
//   }
//
//   return {
//     watcherProxy, getDependentFields, getBehaviorSubjects, getDependentValues,
//   };
// }
