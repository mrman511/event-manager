import styles from '@/styles/Loaders.module.scss' 

export default function SpinLoader({type}){
  if (!type ) type = 'spin';
  const style = styles[`${type}Loader`];

  return (
    <div className={ style }></div>
  );
}