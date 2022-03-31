import { Dict } from './utils';
import { Provider } from './provider';
export declare type TInstances<T extends {
    [key: string]: new (...args: any) => any;
}> = {
    [P in keyof T]: InstanceType<T[P]>;
};
export declare type GetInjectReturnType<Type> = Type extends new (...args: any) => any ? InstanceType<Type> : Type extends {
    [key: string]: new (...args: any) => any;
} ? TInstances<Type> : never;
export declare type TInjector = <T>(injectedObject: T) => GetInjectReturnType<T>;
export declare type TModuleConstructor = new (...args: any[]) => any;
export declare type TModuleConstructorMap = {
    [key: string]: TModuleConstructor;
};
export declare type TModuleClass = new (...args: any) => any;
export declare type AConstructorTypeOf<T> = new (...args: any[]) => T;
export declare type TModuleCreator = TModuleClass | Dict<any> | ((...args: any) => any);
export declare type TModuleLocatorType = TModuleCreator | string;
export declare type TModuleInstanceFor<TModuleLocator> = TModuleLocator extends new (...args: any[]) => infer TInstance ? TInstance : TModuleLocator extends string ? unknown : TModuleLocator;
export declare type TProviderFor<TModuleLocator extends TModuleLocatorType> = Provider<TModuleInstanceFor<TModuleLocator>>;
export declare type TLoadingStatus = 'not-started' | 'loading' | 'done' | 'error';