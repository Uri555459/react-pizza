import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Categories, PizzaItem, SortPopup } from '../components'
import { setCategory } from '../redux/actions/filters'

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
const sortItems = [
    { name: 'популярности', type: 'popular' },
    { name: 'цене', type: 'price' },
    { name: 'алфавиту', type: 'alpfabet' }
]

const Home = () => {
    const dispatch = useDispatch()
    const items = useSelector(({ pizzas }) => pizzas.items)

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    }, [])

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClickItem={onSelectCategory} items={categoryNames} />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items &&
                    items.map(item => <PizzaItem key={`${item.name}_${item.id}`} {...item} />)
                }
            </div>
        </div>
    )
}

export default Home